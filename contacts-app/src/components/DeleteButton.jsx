import Reactv from 'react';

function DeleteButton({id, onDelete}) {
    return <button className='contact-item__delete' onClick={() => onDelete(id)}>X</button> ;
}

// class DeleteButton extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

export default DeleteButton;