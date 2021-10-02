import React, { useState } from "react";
import "./Pay.scss";
import acrd from "./pics/card.png";
import upi from "./pics/UPI.png";
import netb from "./pics/NetBanking.png";
import cod from "./pics/COD.png";

function Paymeth(props) {
  if (props.meth === "Card") {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "75%",
          margin: "20px auto",
        }}
      >
        <div
          style={{
            flex: "1",
            height: "200px",
            margin: "auto",
            maxWidth: "75%",
          }}
        >
          <img src={acrd} alt="Card" style={{ height: "100%" }} />
        </div>
        <div style={{ maxwidth: "75%", margin: "auto", flex: "2" }}>
          <div id="my-form2" className="form" style={{ marginTop: "0" }}>
            <div className="form-group" style={{ width: "75%" }}>
              <input
                type="Name"
                className="form-control"
                placeholder="Name"
                required
                style={{ marginTop: "0" }}
              />
            </div>
            <div className="form-group" style={{ width: "75%" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Card Number"
                pattern="[0-9]{12}"
                required
                style={{ marginTop: "0" }}
              />
            </div>
            <div className="form-group" style={{ width: "75%" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Expiration Date(mm/yy)"
                pattern="[0-9]{2}/[0-9]{2}"
                required
                style={{ marginTop: "0" }}
              />
            </div>
            <div className="form-group" style={{ width: "75%" }}>
              <input
                type="text"
                className="form-control"
                placeholder="CVV"
                pattern="[0-9]{3}"
                required
                style={{ marginTop: "0" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.meth === "UPI") {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "75%",
          margin: "20px auto",
        }}
      >
        <div
          style={{
            flex: "1",
            height: "200px",
            margin: "auto",
            maxWidth: "75%",
          }}
        >
          <img src={upi} alt="Card" style={{ height: "100%" }} />
        </div>
        <div style={{ maxwidth: "75%", margin: "auto", flex: "2" }}>
          <div id="my-form2" className="form" style={{ marginTop: "0" }}>
            <div className="form-group" style={{ width: "75%" }}>
              <label style={{ margin: "0" }}>UPI ID</label>
              <input
                type="upi"
                className="form-control"
                placeholder="Ex:PhoneNumber@upi"
                required
                style={{ marginTop: "0" }}
              />
            </div>
            <div className="form-group" style={{ width: "75%" }}>
              <label style={{ margin: "0" }}>Pin</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your 4 digit UPI pin"
                pattern="[0-9]{4}"
                required
                style={{ marginTop: "0" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.meth === "NetBanking") {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "75%",
          margin: "20px auto",
        }}
      >
        <div
          style={{
            flex: "1",
            height: "200px",
            margin: "auto",
            maxWidth: "75%",
          }}
        >
          <img src={netb} alt="Card" style={{ height: "100%" }} />
        </div>
        <div style={{ maxwidth: "75%", margin: "auto", flex: "2" }}>
          <div id="my-form2" className="form" style={{ marginTop: "0" }}>
            <div className="form-group" style={{ width: "75%" }}>
              <label style={{ margin: "auto" }}>Bank</label>
              <select
                defaultValue=""
                className="form-control"
                id="Bank"
                style={{ marginBottom: "20px", height: "50px" }}
                required
              >
                <option value="" disabled>
                  Select your Bank
                </option>
                <option value="Bank1">State Bank of India</option>
                <option value="Bank2">Central Bank of India.</option>
                <option value="Bank3">Union Bank of India.</option>
                <option value="Bank4">Canara Bank.</option>
                <option value="Bank1">Axis Bank</option>
                <option value="Bank1">HDFC Bank</option>
                <option value="Bank1">ICICI Bank</option>
                <option value="Bank1">Kotak Mahindra Bank</option>
                <option value="Bank1">City Union Bank</option>
                <option value="Bank1">Punjab National Bank</option>
              </select>
            </div>

            <div className="form-group" style={{ width: "75%" }}>
              <label style={{ margin: "0" }}>Customer ID</label>
              <input
                type="CID"
                className="form-control"
                placeholder=""
                required
                style={{ marginTop: "0" }}
              />
              <label style={{ margin: "0" }}>Password</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                required
                style={{ marginTop: "0" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.meth === "COD") {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "75%",
          margin: "20px auto",
        }}
      >
        <div
          style={{
            flex: "1",
            height: "200px",
            margin: "auto",
            maxWidth: "75%",
          }}
        >
          <img src={cod} alt="Card" style={{ height: "100%" }} />
        </div>
        <div style={{ maxwidth: "75%", margin: "auto", flex: "2" }}>
          <p>
            You can pay for the books at the time of delivery to our executive.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <p style={{ textAlign: "center" }}>
        Please select your prefered payment method.
      </p>
    );
  }
}

const Pay = (props) => {
  const [selected, setSelected] = useState("");

  const handleSelectValue = (event) => {
    setSelected(event.target.value);
  };
  return (
    <div style={{ maxwidth: "75%", margin: "auto" }}>
      <form id="my-form" className="form" style={{}}>
        <h2 className="mb-4">Shipping Address</h2>
        <div className="form-group" style={{ width: "75%" }}>
          <input
            type="Name"
            className="form-control"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group" style={{ width: "75%" }}>
          <input
            type="tel"
            className="form-control"
            id="phNo"
            placeholder="Phone Number(Ex: 9876543210)"
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div className="form-group" style={{ width: "75%" }}>
          <input
            type="Address"
            className="form-control"
            id="street"
            placeholder="D.no, Street, Area, Landmark"
            required
          />
        </div>
        <div
          className="form-group"
          style={{
            display: "grid",
            width: "75%",
            gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
            columnGap: "10px",
          }}
        >
          <div style={{ width: "100%" }}>
            <input
              type="city"
              className="form-control"
              id="inputCity"
              placeholder="City"
              required
            />
          </div>
          <div style={{ width: "100%" }}>
            <input
              type="state"
              className="form-control"
              id="inputState"
              placeholder="State"
              required
            />
          </div>

          <div style={{ width: "100%" }}>
            <input
              type="zip"
              className="form-control"
              id="inputZip"
              placeholder="Zip(Ex: 520013)"
              pattern="[0-9]{6}"
              required
            />
          </div>
          <div style={{ width: "100%" }}>
            <input
              type="county"
              className="form-control"
              id="inputCounty"
              placeholder="County"
              required
            />
          </div>
        </div>
        <h2 className="mb-4" style={{ marginTop: "20px" }}>
          Payment
        </h2>
        <div className="form-group">
          <label style={{ margin: "auto" }}>Payment method</label>
          <select
            required
            value={selected}
            onChange={handleSelectValue}
            className="form-control"
            id="paymentMethod"
            style={{ marginBottom: "20px", height: "50px" }}
          >
            <option value="" disabled>
              Select payment method
            </option>
            <option value="Card">Credit Card/Debit Card</option>
            <option value="UPI">UPI</option>
            <option value="NetBanking">Net Banking</option>
            <option value="COD">Pay on Delivery</option>
          </select>
        </div>
        <Paymeth meth={selected} />
      </form>
    </div>
  );
};

export default Pay;
