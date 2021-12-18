import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getSingleOrderThunk } from '../../store/singleorder'
import SingleOrderEmails from './SingleOrderEmails'
import Invoice from './Invoice'
import SingleOrderServices from './SingleOrderServices'
import SingleOrderDetails from './SingleOrderDetails'
import OrderComments from './OrderComments'
import './styles.scss'

const SingleOrder = (props) => {
  const params = useParams()

  useEffect(() => {
    console.log('all props', props)
    console.log('order id props', params.orderid)
    props.getOrder(params.orderid)
  }, [])

  const singleorder = props.order || {}
  const services = props.order.services || []
  const customer = singleorder.customer || {}
  const pickUpDriver = singleorder.pickUpDriver || {}
  const returnDriver = singleorder.returnDriver || {}
  const orderDealers = singleorder.dealers || []

  return (
    <div>
      <div className="singleordercontainer">
        <div className="singleordertable">
          <SingleOrderDetails
            order={singleorder}
            customer={customer}
            pickUpDriver={pickUpDriver}
            returnDriver={returnDriver}
            orderDealers={orderDealers}
          />
          <SingleOrderEmails />
        </div>
        <div className="invoiceform">
          <h3 className="sectionHeader">Manage Order</h3>
          <Invoice />
          <h3 className="sectionHeader">Add Services</h3>
          <div className="singleOrderServices">
            <SingleOrderServices services={services} />
          </div>
          <h3 className="sectionHeader">Internal Comments</h3>
          <OrderComments id={params.orderid} />
        </div>
      </div>
      <br />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    order: state.singleorder,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrder: (id) => dispatch(getSingleOrderThunk(id)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleOrder)
