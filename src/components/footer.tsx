import Link from 'next/link';
import React from 'react';
export default ()=>{
    return <div className='f-footer'>
        <div>
            <p>Copyright © 2022 Marinzon. All Rights Reserved.</p>
        </div>
        <div>
            <Link href="">
            <a>About Marinzon
            </a>
            </Link>
            <Link href="">
            <a>Privacy Policy
            </a>
            </Link>
            <Link href="">
            <a>Terms of Use
            </a>
            </Link>
            <Link href="">
            <a>FAQs
            </a>
            </Link>
        </div>
    </div>
}