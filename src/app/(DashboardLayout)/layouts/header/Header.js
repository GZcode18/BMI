import React, { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import Image from "next/image";

const Header = ({ showMobmenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar expand="md" className="position-fixed w-100">
      <div className="d-flex align-items-center">
        {/* Navbar Brand */}
        <NavbarBrand href="/" className="d-lg-none fw-bold text-primer">
          Kalkulator BMI
        </NavbarBrand>

        {/* Burger Button */}
        {/* <Button color="primary" className="d-lg-none" onClick={toggleNavbar}>
          {isOpen ? (
            <i className="bi bi-x-lg"></i> // Icon untuk menutup
          ) : (
            <i className="bi bi-list"></i> // Icon burger
          )}
        </Button> */}
      </div>

      {/* Konten untuk Desktop */}
      <Collapse navbar isOpen={isOpen} className="justify-content-end">
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link href="/" className="nav-link fw-bold">
              Kalkulator BMI
            </Link>
          </NavItem>
        </Nav>
        <Nav navbar>
          <NavItem>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#manfaat" className="nav-link">
              Manfaat BMI
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#kalkulator" className="nav-link">
              Kalkulator BMI
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#klasifikasi" className="nav-link">
              Klasifikasi BMI
            </Link>
          </NavItem>
        </Nav>
      </Collapse>

      {/* Dropdown Mode Mobile */}
      <UncontrolledDropdown className="d-lg-none ms-auto">
        <DropdownToggle nav caret>
          <i className="bi bi-three-dots-vertical"></i>
        </DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>
            <Link href="/" className="text-decoration-none text-primer">
              Home
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link href="#manfaat" className="text-decoration-none text-primer">
              Manfaat BMI
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link href="#kalkulator" className="text-decoration-none text-primer">
              Kalkulator BMI
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link href="#klasifikasi" className="text-decoration-none text-primer">
              Klasifikasi BMI
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Navbar>
  );
};

export default Header;
