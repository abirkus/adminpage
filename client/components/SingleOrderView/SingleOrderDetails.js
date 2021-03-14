import React from 'react'
import {Descriptions, Tabs} from 'antd'
import {Link} from 'react-router-dom'
const {TabPane} = Tabs
import moment from 'moment'
import {LocationCell, StatusCell} from '../Table/Cells.js'

const SingleOrderDetails = props => {
	const singleorder = props.order
	const customer = props.customer
	return (
		<Tabs type='card'>
			<TabPane tab='Order Details' key='1'>
				<Descriptions
					layout='vertical'
					column={{
						xxl: 3,
						xl: 2,
						lg: 2,
						md: 2,
						sm: 1,
						xs: 1,
					}}>
					<Descriptions.Item>
						<Descriptions
							title='Order'
							layout='horizontal'
							bordered={false}
							column={1}
							size='small'
							className='descriptionsAntd'>
							<Descriptions.Item label='Order ID'>
								{singleorder.hash}
							</Descriptions.Item>
							<Descriptions.Item label='Status'>
								<StatusCell value={singleorder.status} />
							</Descriptions.Item>
							<Descriptions.Item label='Pickup Date'>
								{moment(singleorder.pickupDate).format(
									'M/D/YY hh:mm A'
								)}
							</Descriptions.Item>
							<Descriptions.Item label='Drop Off Date'>
								{moment(singleorder.dropoffDate).format(
									'M/D/YY hh:mm A'
								)}
							</Descriptions.Item>
							<Descriptions.Item label='Pickup Location'>
								<LocationCell
									value={singleorder.pickupLocation}
								/>
							</Descriptions.Item>
							<Descriptions.Item label='PROMO CODE'>
								{singleorder.promoCode}
							</Descriptions.Item>
							<Descriptions.Item label='Discount'>
								{singleorder.discount}
							</Descriptions.Item>
							<Descriptions.Item label='Flexible on Time'>
								{singleorder.flexibleOnTime}
							</Descriptions.Item>
							<Descriptions.Item label='Created at'>
								{moment(singleorder.createAt).format(
									'M/D/YY hh:mm A'
								)}
							</Descriptions.Item>
							<Descriptions.Item label='Updated at'>
								{moment(singleorder.updatedAt).format(
									'M/D/YY hh:mm A'
								)}
							</Descriptions.Item>
						</Descriptions>
					</Descriptions.Item>

					<Descriptions.Item>
						<Descriptions
							title='Car'
							layout='horizontal'
							bordered={false}
							size='small'
							column={1}
							className='descriptionsAntd'>
							<Descriptions.Item label='Car Make'>
								{singleorder.carMake}
							</Descriptions.Item>
							<Descriptions.Item label='Car Model'>
								{singleorder.carModel}
							</Descriptions.Item>
							<Descriptions.Item label='Car Year'>
								{singleorder.carYear}
							</Descriptions.Item>
							<Descriptions.Item label='VIN'>
								{singleorder.vin}
							</Descriptions.Item>
							<Descriptions.Item label='Stick shift'>
								{singleorder.stickShift}
							</Descriptions.Item>
						</Descriptions>
					</Descriptions.Item>

					<Descriptions.Item>
						<Descriptions
							title='Customer'
							layout='horizontal'
							bordered={false}
							size='small'
							column={1}
							className='descriptionsAntd'>
							<Descriptions.Item label='Customer Phone Number'>
								{customer.phoneNumber}
							</Descriptions.Item>
							<Descriptions.Item label='Customer Name'>
								<Link
									to={`/singlecustomer/${customer.phoneNumber}`}>
									{customer.firstName} {customer.lastName}
								</Link>
							</Descriptions.Item>
							<Descriptions.Item label='Customer Comments'>
								{singleorder.customerComments}
							</Descriptions.Item>
						</Descriptions>
					</Descriptions.Item>
				</Descriptions>
			</TabPane>
			<TabPane tab='Change log' key='2'>
				Change log coming soon ...
			</TabPane>
		</Tabs>
	)
}

export default SingleOrderDetails