import "./Product.css";
import Price from "./Price";
import ProductTab from "./ProductTab";

function Product({title, idx}){
if (!title) return null;
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let Description = [
        ["8,000 DPI", "5 Programmable Buttons"],
        ["Intuitive surface", "Designed for iPad Pro"], 
        ["Intuitive surface", "Designed for iPad Pro"],
        ["Wireless", "Optical Orientations"],
    ];
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}
export default Product;