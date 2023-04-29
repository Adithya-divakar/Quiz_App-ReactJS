import React, { useState } from 'react';
import "./style.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Button,Form}  from 'react-bootstrap'

export default function List() {
    const [items, setItems] = useState([]);
    const [txtContent, setTxtContent] = useState('');
    const [edit,setEdit]=useState(-1)

    const txtChange = (e) => {
        setTxtContent(e.target.value);
    };

    const addItem = (e) => {
        e.preventDefault();
       if(txtContent.trim()==""){
        alert("add list")
        return;
       }
        else if (edit=== -1) {
            let currentItems = [...items, txtContent];
            setItems(currentItems);
          } else {
            let currentItems = [...items];
            currentItems[edit] = txtContent;
            setItems(currentItems);
            setEdit(-1);
          }
        setTxtContent('');
    };

    const removeItem = (i) => {
        if (!window.confirm('Are you sure you want to delete this?')) {
            return;
        }
        let currentItems = [...items];
        currentItems.splice(i, 1);
        setItems(currentItems);
    };

    const editItem =(i)=>{
    
            setEdit(i);
            setTxtContent(items[i]);
          };
    

    return (
        <div className='m-sm-0 main_div'>
          
            <div className='container'>
            <h1>To Do List</h1>
            <Form onSubmit={addItem} className="d-flex form">
                <input type='text' value={txtContent} className="screen m-2" onChange={txtChange} />
                <Button className="btn add m-2"  type='submit' >Add</Button>
            </Form>
            <table>
                {items.map((content, k) => {
                    return (
                        <tr key={k}>
                         <td> <span>  {content}</span>  </td>
                         <td> <span>  <Button onClick={() => removeItem(k)}>Delete</Button></span></td>
                         <td> <span>   <Button onClick={() => editItem(k)}>Edit</Button></span></td>
                            
                         </tr> 
                    );
                })}
            </table>
        </div>
       
</div>
    );
}
