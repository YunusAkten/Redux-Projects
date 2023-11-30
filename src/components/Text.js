import { useSelector } from "react-redux";

function Text() {
  const text = useSelector((state) => state.app.paragraphText);
  const format = useSelector((state) => state.app.format);
  return (
    <div className="mt-4   p-2 border-bottom border-top">
      {text ? (
        text.map((paragraph, index) => {
          return (
            <p key={index}>
              {format === "html" ? "<p>" : null}
              {paragraph}
              {format === "html" ? "<p>" : null}
            </p>
          );
        })
      ) : (
        <div>
          <p className="placeholder placeholder-lg col-12 ">Loading...</p>
          <p className="placeholder placeholder-lg col-12 ">Loading...</p>
          <p className="placeholder placeholder-lg col-12 ">Loading...</p>
          <p className="placeholder placeholder-lg col-12 ">Loading...</p>
        </div>
      )}
    </div>
  );
}

export default Text;
