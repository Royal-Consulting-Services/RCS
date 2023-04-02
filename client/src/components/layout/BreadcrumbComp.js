import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbComp(props) {
  return (
    <Breadcrumb className={props.className}>
      {props?.pageProps?.map(item =>(
        <Breadcrumb.Item active={item.active}>{item.title}</Breadcrumb.Item>
        )
      )}
    </Breadcrumb>
  );
}

export default BreadcrumbComp;