
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import NavBar from './NavBar'; 

export default function ClientOnlyNavBar() {
  const pathname = usePathname();  


  const shouldShowNavBar = pathname === '/Profile' || pathname === '/Cours';

  return shouldShowNavBar ? <NavBar /> : null; 
}
