export default function GetImageURL({imageId}) {
    return (
        <img
          className="avatar"
          src={imageId}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
    );
  }
  