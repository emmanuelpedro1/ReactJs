import React from 'react';
import '../../style.css';
import Card from '../ItemListContainer/ItemListContainer'



export default function NavBar() {
  return (
    <div>
      <section >
                    <h1 className="text-center">Tienda Kairos</h1>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Product</button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                        </div>
                    </nav>
                </section>
<Card></Card>

    </div>
  );
}