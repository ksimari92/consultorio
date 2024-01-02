import React, {useState} from 'react'

export const EditarPaciente = ({paciente, pacients, setPacients, setResult, isEditing, setIsEditing}) => {
    const [editedItem, setEditedItem] = useState(paciente);

    console.log(editedItem)
   
    
      const handleCancelClick = () => {
        setIsEditing(false);
      };
    
      const handleSaveClick = () => {
        const newItems = [...pacients];
        const indexToEdit = newItems.findIndex(item => item.id === editedItem.id);
        if (indexToEdit !== -1) {
          newItems[indexToEdit] = editedItem;
          setPacients(newItems);
          setIsEditing(false);
          setResult("")
        }
      };
       
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedItem({
          ...editedItem,
          [name]: value,
        });
      };
    
    
    return (
        <div>
            {isEditing &&
                <div>
                    <label>
                        Name:
                        <input
                            className='form-control form-control-sm'
                            type="text"
                            name="name"
                            value={editedItem.name}
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        Email:
                        <input
                            className='form-control form-control-sm'
                            type="text"
                            name="email"
                            value={editedItem.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Telefono:
                        <input
                            className='form-control form-control-sm'
                            type="text"
                            name="telefono"
                            value={editedItem.phone}
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        Address:
                        <input
                            className='form-control form-control-sm'
                            type="text"
                            name="address"
                            value={editedItem.address.street}
                            onChange={handleInputChange} />
                    </label>
                    <button className='btn btn-outline-primary' onClick={handleSaveClick}>Save</button>
                    <button className='btn btn-outline-primary' onClick={handleCancelClick}>Cancel</button>
                    <hr />
                </div>

            }
        </div>
    )
}
