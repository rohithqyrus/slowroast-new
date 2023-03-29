import { useCartState } from "@/context/cart";
import { useState } from "react";
import { useCreditCardValidator, images } from "react-creditcard-validator";
import commerce from "../../lib/commerce";
import {AiOutlineLoading3Quarters} from "react-icons/ai"

const CheckoutDetail = ({setSuccess}) => {
  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
    meta: { erroredInputs },
  } = useCreditCardValidator();

  const { id, line_items } = useCartState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState(0);
  const [cc, setCC] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);

  const generateToken = async () => {
    await commerce.checkout.generateToken(id, { type: 'cart' })
  .then((checkout) => setToken(checkout.id))
  };

  const submitOrder = async (event) => {
    event.preventDefault()
    setLoading(true)
    generateToken()

    const split = expiry.split("/");;
    const month = Number.parseInt(split[0]);
    const year = Number.parseInt(split[1]);

    commerce.checkout.capture(token, {
      line_items: line_items,
      customer: {
        firstname: firstName,
        lastname: lastName,
        email: email,
        phone: phone
      },
      shipping: {
        name: firstName + " " + lastName,
        street: address,
        town_city: city,
        postal_zip_code: zip,
        country: country
      },
      billing: {
        name: firstName + " " + lastName,
        street: address,
        town_city: city,
        postal_zip_code: zip,
        county_state: 'US-CA',
        postal_zip_code: '94103',
        country: 'US'
      },
      payment: {
        gateway: 'test_gateway',
        card: {
          number: cc,
          expiry_month: month,
          expiry_year: year,
          cvc: cvc,
          postal_zip_code: zip
        }
      },
    }).then((response) => {
      setSuccess(true)
      setLoading(false)});
  }

  return (
    <div className="flex flex-col gap-10 py-6 font-poppins">
      <h2 className="text-2xl font-semibold">Contact Information</h2>
      <form className="flex flex-col gap-5" onSubmit={submitOrder}>
        <div className="grid grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="First Name"
            className="p-3 rounded-xl border-2 border-darkgreen"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 rounded-xl border-2 border-darkgreen"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-xl border-2 border-darkgreen"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          className="p-3 rounded-xl border-2 border-darkgreen"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <h2 className="text-2xl font-semibold">Shipping Address</h2>
        <input
          type="text"
          placeholder="Adress"
          className="p-3 rounded-xl border-2 border-darkgreen"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <div className="grid grid-cols-3 gap-5 p-3 rounded-xl border-2 border-darkgreen">
          <input
            type="text"
            placeholder="City"
            className="p-3 rounded-xl border-2 border-darkgreen"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <select
            className="p-3 rounded-xl border-2 border-darkgreen"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="US">United States</option>
            <option value="MM">Myanmar</option>
          </select>
          <input
            type="text"
            placeholder="ZIP code"
            className="p-3 rounded-xl border-2 border-darkgreen"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            required
          />
        </div>
        <h2 className="text-2xl font-semibold">Payment Information</h2>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-5 items-center">
            <svg
              {...getCardImageProps({ images })}
              className="text-xl "
              width={50}
            />
            <input
              {...getCardNumberProps({onChange:(e) => setCC(e.target.value)})}
              className="w-full p-3 rounded-xl border-2 border-darkgreen"
              value={cc}
              required
            />
          </div>
          <small>{erroredInputs.cardNumber && erroredInputs.cardNumber}</small>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col">
            <input
              {...getExpiryDateProps({onChange:(e) => setExpiry(e.target.value)})}
              className="p-3 rounded-xl border-2 border-darkgreen"
              value={expiry}
              required
            />
            <small>
              {erroredInputs.expiryDate && erroredInputs.expiryDate}
            </small>
          </div>
          <div className="flex flex-col">
            <input
              {...getCVCProps({onChange:(e) => setCVC(e.target.value)})}
              className="p-3 rounded-xl border-2 border-darkgreen"
              value={cvc}
              required
            />
            <small>{erroredInputs.cvc && erroredInputs.cvc}</small>
          </div>
        </div>
        <div></div>
        <button className={`bg-red-900 rounded-xl p-3 text-primary`} type="submit">
          {!loading ? (<p>Place Order</p>) : (<p className="flex w-full items-center gap-5 justify-center"><AiOutlineLoading3Quarters className="animate-spin"/>Please wait...</p>)}
        </button>
      </form>
    </div>
  );
};

export default CheckoutDetail;
