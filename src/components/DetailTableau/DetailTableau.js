import React from 'react';

const DetailTableau = () => {
    const addresses = [
        {
          id: 1,
          name: "Dianne Russell",
          address: "4140 Parker Rd. Allentown,New Mexico 31134",
          email: "dianne@example.com",
          phone: "(225) 0576 120238",
        },
        // Add more addresses as needed
      ];
      return (
        <div className="container-tables-commande">
          <table className="table-details">
            <thead>
              <tr>
                <th>Adresse de Facturation</th>
                <th>Adresse de Livraison</th>
              </tr>
            </thead>
            <tbody>
              {addresses.map((address) => (
                <tr key={address.id}>
                  <td>
                    <div>{address.name}</div>
                    <p>{address.address}</p>
                    <div>Email</div>
                    <p>{address.email}</p>
                    <div>Téléphone</div>
                    <p> {address.phone}</p>
                  </td>
                  <td>
                    <div>{address.name}</div>
                    <p>{address.address}</p>
                    <div>Email</div>
                    <p>{address.email}</p>
                    <div>Téléphone</div>
                    <p> {address.phone}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="order-details">
            <div className="header">
            <div className="header-element">
              <div className="label">Order ID</div>
              <div className="value">#{}</div>
            </div>
                <div className="trait-separation"></div>
            <div className="header-element">
              <div className="label">Methode de paiement</div>
              <div className="value">0</div>
            </div></div>
            
    
            <div>
              <div className="label">Sous-total</div>
              <div className="value">XOF {}</div>
            </div>
            <div>
              <div className="label">Reduction</div>
              <div className="value">{}</div>
            </div>
            <div>
              <div className="label">Livraison</div>
              <div className="value">XOF {}</div>
            </div>
            <div>
              <div className="label">Total</div>
              <div className="value">XOF {}</div>
            </div>
          </div>
        </div>
      );
}

export default DetailTableau;
