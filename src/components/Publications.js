import masteringTheLightningNetwork from "../assets/masteringTheLightningNetwork.jpg";

function Publications() {
  return (
    <section className="p-md-5" id="publications">
      <div className="my-4">
        <p className="p2" style={{ display: "inline" }}>
          07.{" "}
        </p>
        <h2 style={{ display: "inline" }}>Publications</h2>
      </div>
      <div className="certification-container">
        <img
          className="certificate-image"
          src={masteringTheLightningNetwork}
        ></img>
        {/* may need to remove these unecessary classes - see the css too */}
        <div className="ms-4">
          <p className="p1 bold mb-1">Mastering the Lightning Network</p>
          <p className="p1">
            Made minor contributions to 'Mastering the Lightning Network', a
            technical book about a second layer Bitcoin protocol, for which I am
            recognised in the acknowledgements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Publications;
