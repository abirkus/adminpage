import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Modal, DatePicker, Form, Input} from 'antd'
import {updateSingleOrderThunk} from '../store/singleorder'
import {Button} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import moment from 'moment'

function clean(obj) {
	for (var propName in obj) {
		if (
			obj[propName] === null ||
			obj[propName] === undefined ||
			obj[propName] === ''
		) {
			delete obj[propName]
		}
	}
}

const layout = {
	labelCol: {span: 8},
	wrapperCol: {span: 16},
}

const UpdateOrder = props => {
	const [form] = Form.useForm()
	const [show, setShow] = useState(false)
	const [checkPromo, setCheckPromo] = useState(false)
	const order = useSelector(state => state.singleorder)
	const dispatch = useDispatch()

	const params = useParams()
	const id = params.orderid
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	useEffect(() => {
		form.validateFields(['promoCode'])
	}, [checkPromo])

	const onDiscountChange = e => {
		setCheckPromo(!!e.target.value)
	}

	const onFinish = values => {
		console.log('update order values', values)
		if (values.dropoffDate) {
			values.dropoffDate = moment.utc(values.dropoffDate).valueOf()
		}
		if (values.pickupDate) {
			values.pickupDate = moment.utc(values.pickupDate).valueOf()
		}
		clean(values)
		console.log('update order values', values)
		dispatch(updateSingleOrderThunk(id, values))
		handleClose()
	}

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo)
	}

	const onCancel = () => {
		form.resetFields()
		handleClose()
	}

	return (
		<div>
			<Button
				size='lg'
				block
				variant='primary'
				onClick={() => handleShow(true)}>
				Update Order Details
			</Button>
			<Modal
				title={`Update order ${order.hash}`}
				visible={show}
				footer={null}
				onCancel={onCancel}>
				<Form
					{...layout}
					form={form}
					name='control-hooks'
					size='large'
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}>
					<Form.Item name='pickupDate' label='Pick Up Date'>
						<DatePicker showTime format='YYYY-MM-DD HH:mm' />
					</Form.Item>
					<Form.Item name='dropoffDate' label='Drop Off Date'>
						<DatePicker showTime format='YYYY-MM-DD HH:mm' />
					</Form.Item>
					<Form.Item
						name='pickupLocation'
						label='Pickup Location'
						initialValue={order.pickupLocation}>
						<Input />
					</Form.Item>
					<Form.Item
						name='carYear'
						label='Car Year'
						initialValue={order.carYear}>
						<Input />
					</Form.Item>
					<Form.Item
						name='carMake'
						label='Car Make'
						initialValue={order.carMake}>
						<Input />
					</Form.Item>
					<Form.Item
						name='carModel'
						label='Car Model'
						initialValue={order.carModel}>
						<Input />
					</Form.Item>
					<Form.Item
						name='vin'
						label='Vin #'
						initialValue={order.vin || ''}>
						<Input />
					</Form.Item>
					<Form.Item
						name='promoCode'
						label='Promo Code'
						rules={[
							{
								required: checkPromo,
								message:
									'Please add promo code before adding discount amount',
							},
						]}
						initialValue={order.promoCode || ''}>
						<Input />
					</Form.Item>
					<Form.Item
						name='discount'
						label='Discount amount'
						initialValue={order.discount || ''}>
						<Input onChange={onDiscountChange} />
					</Form.Item>
					<Form.Item>
						<Button
							type='button'
							variant='light'
							onClick={onCancel}>
							Cancel
						</Button>
						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	)
}

export default UpdateOrder
