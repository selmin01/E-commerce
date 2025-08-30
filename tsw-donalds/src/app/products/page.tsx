import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const ProductsPage = () => {
  return ( 
    <div className="p-5 border rounded-xl">
        <h1 className="text-red-600"> Products Pagee </h1>
        <Button>FSW - 7.0</Button>
        <br />
        <Input placeholder="Search"></Input>
    </div>
  )
};

export default ProductsPage;
