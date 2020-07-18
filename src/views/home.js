import React from 'react';
import nias from '../P.jpg';
import itb from '../itb.png';
import ntu from '../ntu.png';
import mit from '../mit.png';
import uts from '../uts.png';

export default function Home() {
    return (
        <div className="App">
            <header className="App-header">
                
            </header>

<div class ="container" > 
  <div class = "row">    
        <div class="col-lg-6">
        <br/>
        <h5 class="text-primary" class="nav-ite"> Nias is an island located off the western coast of Sumatra, Indonesia. Nias is also the name of the archipelago of which the island is the centre, but also includes the Batu Islands to the south-east and the small Hinako Islands to the west. Nias Island covers an area of 5,121.3 km².</h5>
        <button type="button" class="btn btn-primary">Harga Wisata</button>
        <button type="button" class="btn btn-primary">Tempat Wisata</button>
       </div>
        <div class="col-lg-6 "> 
        <img src={nias} alt="..." class="img-thumbnail"/>
</div>

</div>
</div>

<hr/>

<div class ="container"> 
<div class ="bg-primary" >Our Sponsor</div>
<br/>
<br/>
<br/>
<div class = "row">

    <div class="col-lg-3"> 
    <img src={itb}  class="rounded-circle border border-danger" />

    </div>

    <div class="col-lg-3"> 
    <img src={ntu}  class="rounded-circle border border-danger"/>
    </div>
    <div class="col-lg-3"> 
    <img src={mit}  class="rounded-circle border border-danger"/>
    </div>
    <div class="col-lg-3 ">
    <img  src={uts} class="rounded-circle border border-danger"/>

    </div>
</div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>

<div class = "bg-primary" class="nav-it" >
<div class ="container" > 
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
