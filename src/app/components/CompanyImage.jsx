import Link from 'next/link';
import Image from 'next/image';

export default function CompanyImage(props) {
    return (
        <Link href={props.href} target='_blank'>
                <Image
                    className='rounded-lg  mx-3'
                    src={props.src}
                    width={100}
                    height={10}
                    alt={props.name}
                />
        </Link>

    );
}