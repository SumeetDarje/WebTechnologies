import axios from "axios";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import fieldValidate from "./FiledValidate";

function AdminProductFormSample(props) {
  let emptyProduct = {
    name: "",
    // image: "/images/Default.jpg",
    unit: "",
    mrp: "",
    discount: "",
    inStock: true,
    qty: 0,
    type: "",
  };
  let [product, setProduct] = useState([]);
  let [flagLoader, setFlagLoader] = useState(false);
  let [flagFormInvalid, setFlagFormInvalid] = useState(false);
  let { adminView } = props;
  let { sampleProduct } = props;
  let [errorProduct, setErrorProduct] = useState({
    name: { message: "", mxLen: 80, mnLen: 3, onlyDigits: false },
    mrp: { message: "", mxLen: 6, mnLen: 1, onlyDigits: true },
    discount: { message: "", mxLen: 6, mnLen: 1, onlyDigits: true },
  });
  useEffect(() => {
    if (adminView == "edit") {
      setProduct(props.product);
    } else if (adminView == "add") {
      let p = emptyProduct;
      console.log(p);
      setProduct(p);
    }
  }, []);
  function handleProductListClick() {
    props.onProductListClick();
  }
  function handleTextChange(event) {
    let name = event.target.name;
    setProduct({ ...product, [name]: event.target.value });

    let message = fieldValidate(event, errorProduct);
    let errProduct = { ...errorProduct };
    errProduct[name].message = message;
    setErrorProduct(errProduct);
    checkAllErrors(errProduct);
  }
  function handleBlur(event) {
    let name = event.target.name;
    let message = fieldValidate(event, errorProduct);
    let errProduct = { ...errorProduct };
    errProduct[`${name}`].message = message;
    setErrorProduct(errProduct);
    checkAllErrors(errProduct);
  }
  function handleFocus(event) {
    // checkAllErrors();
  }
  function checkAllErrors(errProduct) {
    for (let field in errProduct) {
      if (errProduct[field].message !== "") {
        setFlagFormInvalid(true);
        return;
      } //if
    } //for
    setFlagFormInvalid(false);
  }
  function handleProductAddEditFormSubmit(event) {
    event.preventDefault();
    console.log(product);
    if (adminView == "edit") {
      updateBackendProduct(product);
    } else if (adminView == "add") {
      addToBackendProduct(product);
    }
  }
  async function updateBackendProduct(product) {
    setFlagLoader(true);
    let response = await axios.put(
      "http://localhost:3000/fruits/" + product.id,
      product
    );
    props.onProductEditFormSubmit(product);
    setFlagLoader(false);
  }
  async function addToBackendProduct(product) {
    // setFlagLoader(true);
    let response = await axios.post("http://localhost:3000/fruits", product);
    let data = await response.data;
    console.log("Added");
    // console.log(data);
    props.onProductAddFormSubmit(data); // this has id
    setFlagLoader(false);
  }
  if (flagLoader) {
    return <BeatLoader size={24} color={"red"} />;
  }

  return (
    <>
      <div className="text-center text-danger">
        <a href="#" onClick={handleProductListClick}>
          LIST
        </a>
      </div>
      {adminView == "edit" && (
        <div className="text-center text-danger my-3">
          Edit Product ({product.name})
        </div>
      )}
      {adminView == "add" && (
        <div className="text-center text-danger my-3">Add the new product</div>
      )}
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6  border border-3 border-danger">
          <form
            className="product-form"
            onSubmit={(event) => {
              handleProductAddEditFormSubmit(event);
            }}
          >
            <div className="row">
              <div className="col-4 col-sm-4 text-end my-2">Name</div>
              <div className="col-8 col-sm-6 my-2">
                <input
                  type="text"
                  name="name"
                  id=""
                  required
                  value={product.name}
                  onChange={handleTextChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
              </div>
              <div className="offset-sm-4 offset-6 text-start text-danger">
                {errorProduct.name.message && errorProduct.name.message}
              </div>
              <div className="col-4 col-sm-4 text-end my-2">MRP</div>
              <div className="col-8 col-sm-6 my-2">
                <input
                  type="text"
                  name="mrp"
                  id=""
                  value={product.mrp}
                  required
                  onChange={handleTextChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
              </div>
              <div className="offset-sm-4 offset-6 text-start text-danger">
                {errorProduct.mrp.message && errorProduct.mrp.message}
              </div>
              <div className="col-4 col-sm-4 text-end my-2">Discount</div>
              <div className="col-8 col-sm-6 my-2">
                <input
                  type="text"
                  name="discount"
                  id=""
                  value={product.discount}
                  onChange={handleTextChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  required
                />
              </div>
              <div className="offset-sm-4 offset-6 text-start text-danger">
                {errorProduct.discount.message && errorProduct.discount.message}
              </div>

              {/* add new product */}

              {adminView == "add" && (
                <div className=" row">
                  <div className="offset-sm-4 offset-6 text-start text-danger">
                    {/* {errorProduct.mrp.message && errorProduct.mrp.message} */}
                  </div>
                  <div className="col-4 col-sm-4 text-end my-2">Unit</div>
                  <div className="col-8 col-sm-6 my-2">
                    <input
                      type="text"
                      placeholder="kg,doz,pieces,(etc)"
                      name="unit"
                      id=""
                      value={product.unit}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      required
                    />
                  </div>

                  <div className="offset-sm-4 offset-6 text-start text-danger">
                    {/* {errorProduct.mrp.message && errorProduct.mrp.message} */}
                  </div>
                  <div className="col-4 col-sm-4 text-end my-2">Type</div>
                  <div className="col-8 col-sm-6 my-2">
                    <select
                      name="type"
                      required
                      value={product.type}
                      onChange={(e) =>
                        setProduct({ ...product, type: e.target.value })
                      }
                    >
                      <option value="">Select Type</option>
                      <option value="Organic">Organic</option>
                      <option value="Non-organic">Non-organic</option>
                    </select>
                  </div>

                  <div className="offset-sm-4 offset-6 text-start text-danger">
                    {/* {errorProduct.mrp.message && errorProduct.mrp.message} */}
                  </div>
                  <div className="col-4 col-sm-4 text-end my-2">Stock</div>
                  <div className="col-8 col-sm-6 my-2">
                    <label>
                      <input
                        type="radio"
                        value="true"
                        name="inStock"
                        checked={product.inStock == true}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            inStock: e.target.value == "true",
                          })
                        }
                      />{" "}
                      In Stock{" "}
                      <input
                        type="radio"
                        value="false"
                        name="inStock"
                        checked={product.inStock == false}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            inStock: e.target.value == "true",
                          })
                        }
                      />{" "}
                      Out of Stock
                    </label>
                  </div>
                </div>
              )}

              <div className="col-4 col-sm-4 text-end my-2"></div>
              <div className="col-8 col-sm-6 my-2">
                <input
                  className="btn btn-danger"
                  type="submit"
                  value="Submit"
                  disabled={flagFormInvalid}
                />{" "}
                <button
                  className="btn btn-danger"
                  onClick={handleProductListClick}
                >
                  Cancel{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* row ends */}
    </>
  );
}
export default AdminProductFormSample;
