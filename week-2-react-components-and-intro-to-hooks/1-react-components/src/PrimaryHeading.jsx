function PrimaryHeading({ text }) {
  return (
    <h1
      style={{
        color: "dodgerblue",
        textTransform: "uppercase",
        marginBlock: "15px",
      }}
    >
      {text}
    </h1>
  )
}

export default PrimaryHeading
