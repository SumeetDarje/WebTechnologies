import React from "react";
import { BarLoader } from "react-spinners";

function BillInvoice(props) {
  let { userName } = props;
  let { cartItems } = props;
  let { totalPrice } = props;
  const currentDate = new Date().toLocaleDateString("en-IN");

  function handleBackBillInvoiceClick(){
    props.onhandleBackBillInvoiceClick();
  }

  return (
    <>
    <div className="ms-5 ">
      <button className="btn btn-danger" onClick={handleBackBillInvoiceClick} >
        <i className="bi bi-arrow-left"></i>
      </button>
    </div>
    <div className="text-center">
      <a href="https://web.whatsapp.com/">Share</a> Bill on WhatsApp
      <div className="container border p-4 mt-4 billInvoiceBox ">
        <div className="text-center mb-3">
          <h6>|| Shree ||</h6>
          <h2 className="fw-bold">Hema Fruit Stall</h2>
          <p>220, Market Yard, Pune-411009</p>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <span>
            <strong>Customer Name: </strong>
            {userName}
          </span>
          <span>
            <strong>Date: </strong>
            {currentDate}
          </span>
        </div>

        <div className="table-responsive">
        <table className="table table-bordered mt-3">
          <thead>
            <tr className="table-light">
              <th>No.</th>
              <th>Product</th>
              <th>Rate</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => {
              const mrp = Number(item.mrp);
              const discount = Number(item.discount);
              const qty = Number(item.qty);

              const discountedMrp = mrp - (mrp * discount) / 100;
              const itemTotal = discountedMrp * qty;

              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    {discount > 0 ? (
                      <>
                        Rs.
                        <span className="text-decoration-line-through text-muted me-1">
                          {mrp.toFixed(1)}
                        </span>
                        <span>{discountedMrp.toFixed(1)}</span>
                      </>
                    ) : (
                      `Rs. ${mrp.toFixed(1)}`
                    )}
                  </td>
                  <td>{qty}</td>
                  <td>Rs. {itemTotal.toFixed(1)}</td>
                </tr>
              );
            })}
          </tbody>

          <tfoot>
            <tr className="table-secondary">
              <td colSpan={4} className="text-end">
                <strong>Grand-Total</strong>
              </td>
              <td>
                <strong>Rs. {totalPrice} </strong>
              </td>
            </tr>
          </tfoot>
        </table>
        </div>
      </div>
    </div>
    </>
  );
}

export default BillInvoice;
