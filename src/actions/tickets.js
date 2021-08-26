import axios from '../config/axios'

import swal from 'sweetalert2'

export const setTickets = (ticket) => {
    return {
        type: 'SET_TICKETS',
        payload: ticket
    }
}

export const startSetTickets = () => {
    return (dispatch) => {
        axios.get('/tickets',{
                    headers: {
                        'x-auth': localStorage.getItem('authToken')
                    }
                })
            .then(response=>{
                const tickets = response.data
                dispatch(setTickets(tickets))
            })
            .catch(err=>{
                console.log(err)
            })

    }
}

export const removeTicket = (ticket) => {
    return {
        type: 'REMOVE_TICKET',
        payload: ticket
    }
}

export const startRemoveTicket = (id) => {
    return (dispatch) => {
        axios.delete(`/tickets/${id}`,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const ticket = response.data
            dispatch(removeTicket(ticket))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const addTicket = (ticket) => {
    return {
        type: 'ADD_TICKET',
        payload: ticket
    }
}

export const startAddTicket = (ticket,x,redirect) => {
    console.log(ticket)

     var arr = [];
     ticket.employees.map((option) => {
       console.log(option.id);
       const { id } = option;
       arr.push(id);
       return option.value;
     });
     console.log(arr);
     ticket.employees = arr;

    //  arrdoc test
    var arrdoc = [];
    x.map((option) => {
        console.log(option.id);
        const { id } = option;
        arrdoc.push(id);
        return option.value;
    });
    console.log(arrdoc);
    ticket.doctors = arrdoc;
    //  arrdoc test


    ticket.isResolved=false;

    return (dispatch) => {
        axios.post('/tickets',ticket,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            if(response.data.errors){
                swal.fire(`${response.data.message}`,"","error")
            } else {
                const ticket = response.data
               dispatch(addTicket(ticket))
                redirect()
            }
        })
    }
}

export const editTicket = (ticket) => {
    return {
        type: 'EDIT_TICKET',
        payload: ticket
    }
}

export const startEditTicket = (ticket,x,redirect) => {
    console.log(ticket);
    console.log(ticket.employees.length);
    if(ticket.code)
    {
        var arr=[];
    ticket.employees.map((option) => {
        console.log(option.id)
          const {id} = option;
          arr.push(id)
         return option.value;
        });
        console.log(arr);
        ticket.employees=arr;

        // trerfmk
         var arrb = [];
         x.map((option) => {
             console.log(option.id);
             const { id } = option;
             arrb.push(id);
             return option.value;
         });
         console.log(arrb);
         ticket.doctors = arrb;
        // trerfmk

      return (dispatch) => {
        axios
          .put(`/tickets/${ticket.id}`, ticket, {
            headers: {
              "x-auth": localStorage.getItem("authToken"),
            },
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.errors) {
              swal.fire(`${response.data.message}`, "", "error");
            } else {
              const ticket = response.data;
              redirect();
              dispatch(editTicket(ticket));
              window.location.reload();
            }
          });
      };
   }
   else{
        return(dispatch) => {
        axios.put(`/tickets/${ticket.id}`,ticket,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response => {
            console.log(response.data)
            if (response.data.errors) {
                swal.fire(`${response.data.message}`,"","error")
            } else {
                const ticket = response.data
                redirect()
                dispatch(editTicket(ticket))
                window.location.reload();

            }
        })
    }
   }

}

export const toggleResolve = (ticket) => {
    return {
        type: 'TOGGLE_RESOLVE',
        payload: ticket
    }
}

export const startToggleResolve = (id,isResolved) => {
    return(dispatch) => {
        axios.put(`/tickets/${id}`,{isResolved:!isResolved},{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            dispatch(toggleResolve(id))

    }
}

export const searchTicket = (search) => {
    return {
        type: 'SEARCH_TICKET',
        payload: search
    }
}

export const updateTicketCustomer = (customer) => {
    return {
        type: 'UPDATE_TICKET_CUSTOMER',
        payload: customer
    }
}

export const updateTicketDepartment = (department) => {
    return {
        type: 'UPDATE_TICKET_DEPARTMENT',
        payload: department
    }
}