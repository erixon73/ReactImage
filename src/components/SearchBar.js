import React, {Component} from 'react'
import axios from 'axios'

class SearchBar extends Component { 

    state = {
        keyword: ''
    }

    onSubmitForm = (e)=>{
        e.preventDefault()

       

        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers : {
                    Authorization: 'Client-ID a833aa50cdb28dc26b2c5599875b1d19441f2a6919dd713906206abf68a3c689'
                },
                params: {
                    query : this.state.keyword
                }
            }
        ).then((res)=>{
            // Jika Berhasil
            console.log(res.data.results);
            
        }).catch((err)=>{
            // Jika Gagal
            console.log(err);
            
        })
    }

    onChangeText = (e)=>{
        // Menyimpan text dari user di state.keyword
        this.setState({keyword: e.target.value})
    }


   render() {
       return (
           <div >
              <h3 className='text-center mt-3'>Search Image</h3>
              <form className = 'form-group mt-5'
                  onSubmit={ this.onSubmitForm }>
                  <input 
                   type='text'
                   onChange ={ this.onChangeText }
                   className = 'form-control'
                   placeholder='Type Somethings' />
              </form>
           </div>
       )
   }
}

export default SearchBar

// onSubmit, ketika tag input di dalam form di 'enter'
    //  e.preventDefault() akan menghentikan halaman dari refresh
// onChange, ketika ada perubahan di tag input text
    // event.target.value adalah property berisi teks yang kita ketik
//  this.setState() merupakan function untuk mengubah data pada state
    //  setState() akan menerima satu buah parameter yaitu object {}

// axios.get().then().catch()
    // .then() akan menerima fucntion yang akan dijalankan jika berhasil melakukan request
        // (res)=>{}, res akan berisi respon dari database 
    // .catch() akan menerima fucntion yang akan dijalankan jika gagal melakukan request
        // (err)=>{}, err akan berisi pesan error

 // axios.get('',{}).then(()=>{}).catch(()=>{})




