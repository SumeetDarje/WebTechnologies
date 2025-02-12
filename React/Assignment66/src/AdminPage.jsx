import axios from "axios";
import { useState } from "react";

function AdminPage(props){
    
    let { card } = props;
    let {index}=props;

    function handleEditButton(){
      // console.log("Edit");
      props.onEditBtn(card);
      // console.log(card);
      
    }
      
  async function handleDeleteButton(){
    if(window.confirm(`Are you sure you want to delete ${card.name} ?`)){
      let response = await axios.delete(`http://localhost:3000/fruits/${card.id}`);
      props.onDeleteBtn(card);
      console.log("Delete "+response);
    }else{
      console.log(`Deletion Cancled for ${card.name}`);
      
    }
    }

    return(
        <>
        <div className=" col-lg-3 col-sm-12 col-md-6  text-center p-3 mb-4 myBorder">
        <div>
          <img className="img-fluid" src={`/images/${card.image}`} alt="" />
        </div>
        {card.discount > 0 && (
          <div className="discount"> {card.discount} %Discount </div>
        )}
        <div>{card.name}</div>
        
        <div className="mt-2">Rs. 
          <span className="text-decoration-line-through">{card.discount==0 ? "": 
        (card.mrp)} 
          </span>  {" "}
          {(card.mrp-(card.mrp*card.discount)/100)}
        </div>
        
        <div className="row justify-content-between mt-3">
            <div className="col-6 text-end  ">
            <button className=" btn btn-danger rounded-2" onClick={handleDeleteButton} >  
              <i className="bi bi-trash-fill "></i>
            </button>
            </div>
            <div className="col-6 justify-content-end text-start ">
            <button className=" btn btn-danger rounded-2" onClick={handleEditButton}>
              <i className="bi bi-pencil-square "></i>
            </button>
            </div>
        </div>
      </div>
        </>

    )

}

export default AdminPage;