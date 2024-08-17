import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {

    return(
        <>
        <div className="mt-4 text-center">
            <p>Descubre diferentes estilos para tí</p>
            <h4 className="mt-2 text-5xl font-extrabold  upperce">Sombreros artesanales indígenas </h4>
            <p className="my-2 text-lg">Mejora tu forma de vestir</p>
            <Link href="#" className={buttonVariants()}>Comprar</Link>
        </div>
        <div className="h-[350px] bg-cover md:h-[600px] bg-[url('/slider-ropa.jpg')] bg-center mt-5" />

        </>
    );
}

export default BannerProduct;