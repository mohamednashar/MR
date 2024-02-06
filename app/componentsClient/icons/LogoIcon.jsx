import Image from "next/image";
import img1 from "../../images/logo.png"
function LogoIcon() {
  return (
   
    <div>
      <Image className="w-14 h-14"  src={img1}/>
    </div>


  );
}

export default LogoIcon;
