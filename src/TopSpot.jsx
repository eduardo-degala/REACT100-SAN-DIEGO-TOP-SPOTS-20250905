//TOPSPOT_

const TopSpot = ({ name, description, location }) => {
    const lat = location[0];
    const long = location[1];
    const mapLink = `https://maps.google.com/?q=${lat},${long}`;

    return (

    <div data-testid="topspot" className="row align-items-center bg-white mb-2 border p-3 rounded">

      <div className="col-md-4">
        <h4 className="mb-0">{name}</h4>
      </div>

      <div className="col-md-6">
        <p className="mb-0">{description}</p>
      </div>

      <div className="col-md-2 d-flex align-items-center justify-content-end">
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary w-100"
          style={{
            backgroundColor: '#0d6efd',
            color: 'white',
            borderColor: '#0d6efd',
          }}
        >
          View Map
        </a>
      </div>
    </div>
       
    );
};

export default TopSpot;