import React from 'react';

export default function Contact() {
    return (
        <div className="App">
            <header className="App-header">
            </header>


    <div class ="container"  > 
   <h3 class="text-primary">Daftar Segera</h3>
   <br/>
   <form>
    <div class="form-group">
    <label for="exampleInputName">Name
    <input type="email" class="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
    </label>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email 
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </label>
  </div>
  <div class="form-group">
    <label for="exampleInputPhone">Phone
    <input type="password" class="form-control" id="exampleInputPassword1" />
    </label>
  </div>

  <div class="form-group">
    <label for="exampleFormControlMessage">Message
    <textarea class="form-control" id="exampleFormControlMessage" rows="3"></textarea>
    </label>
  </div>
 
  <button type="button" class="btn btn-primary btn-sm">Submit</button>
<button type="button" class="btn btn-primary btn-sm">Cancel</button>
</form>
</div>
 <br/>  
  <div class ="bg-primary" >Our Location</div>
  <br/>
 <div id="map">
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021224.0566314128!2d96.94258322090697!3d1.043630046159849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30261272d7d1a777%3A0x35ec71eeb2bc1c2!2sNias!5e0!3m2!1sen!2sid!4v1595067551273!5m2!1sen!2sid" ></iframe>
</div>

<br/>
<br/>
<br/>
<br/>
<br/>

<div class = "bg-primary" class="nav-it" >
<div class ="container"> 
<div class = "row"> 
        <div class="col-sm-3 ">
        <br/>
        <h4>Nias Utara</h4>
                <p align="justify">
                Jl. Dr. Ir. H. Soekarno No.36, Geldspace, Kec. Mulyorejo, Kota SBY, Jawa Timur 60132 <br/>
                   
                </p>
                <h5>Telp (021) 53666207</h5>
                WA : 085727672676
        </div>
        <div class="col-sm-3 "> 
        <br/>
        <h4>Nias Selatan</h4>
                <p align="justify">
                Jl. Dr. Ir. H. Soekarno No.36, Geldspace, Kec. Mulyorejo, Kota SBY, Jawa Timur 60132 <br/>
                   
                </p>
                <h5>Telp (021) 53666207</h5>
                WA : 085727672676
        </div>
        <div class="col-sm-3 "> 
        <br/>
        <h4>Nias Barat</h4>
                <p align="justify">
                Jl. Dr. Ir. H. Soekarno No.36, Geldspace, Kec. Mulyorejo, Kota SBY, Jawa Timur 60132 <br/>
                </p>
                <h5>Telp (021) 53666207</h5>
                WA : 085727672676
        </div>
        <div class="col-sm-3 "> 
        <br/>
        <h4>Nias Timur</h4>
                <p align="justify">
                Jl. Dr. Ir. H. Soekarno No.36, Geldspace, Kec. Mulyorejo, Kota SBY, Jawa Timur 60132 <br/>
                   
                </p>
                <h5>Telp (021) 53666207</h5>
                WA : 085727672676
        </div>

</div>
</div>
</div>

        </div>
    )
}