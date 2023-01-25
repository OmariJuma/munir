import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './BreadC.css';
function BreadCrumb() {
  return (
    <Breadcrumb id="bread">
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumb;