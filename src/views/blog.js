import React from 'react';
import satu from '../satu.jpg';
import dua from '../dua.jpg';
import tiga from '../tiga.jpg';
import empat from '../empat.jpg';


export default function Blog() {
    return (
        <div className="App">
            <header className="App-header">
            </header>
 <div class ="container"> 

 <div class = "row">    
      <div class="col-lg-8 ">
        <div class="card mb-3">
           <img class="card-img-top" src={satu} alt="Card image cap" />
          <div class="card-body">
           <h5 class="card-title">Wisata Pulau Nias</h5>
            <p class="card-text">Berbagai destinasi tempat wisata di Nias terkenal sebagai surga tersembunyi di Sumatera Utara. Tak cuma keindahan panorama alam, kebudayaan dan juga tradisi yang ada di Nias juga menjadi keunikan tersendiri. </p>
           <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>

  <div class="col-lg-4 "> 
     <h3 class="text-primary">Popular Post</h3>
       <div class="card mb-3">

           <img class="card-img-top" src={dua} alt="Card image cap"/>
          <div class="card-body">
           <h5 class="card-title">Kunjungi Destinasi Wisata Pulau Nias</h5>
           <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>

     </div>
   </div>

   <div class ="container"> 
 <div class = "row">    
      <div class="col-lg-8 ">
        <div class="card mb-3">
           <img class="card-img-top" src={tiga} alt="Card image cap"/>
          <div class="card-body">
           <h5 class="card-title">Travel Wisata Pulau Nias </h5>
            <p class="card-text">Yuk, intip berbagai tujuan tempat wisata di Kepulauan Nias dan sekitarnya yang wajib dikunjungi  </p>
           <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
     
  <div class="col-lg-4 "> 
       <div class="card mb-3">
           <img class="card-img-top" src={empat} alt="Card image cap" />
          <div class="card-body">
           <h5 class="card-title">Wisata Pulau Nias</h5>
           <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
     </div>
   </div>

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