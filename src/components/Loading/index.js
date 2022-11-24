export function Loading() {
  return (
    <div
      className="loading"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="https://acegif.com/wp-content/uploads/loading-42.gif"
        alt="loading-42"
        style={{ width: "50px", height: "auto" }}
      ></img>
    </div>
  );
}
