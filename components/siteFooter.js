import React from "react";
import Card from "react-bootstrap/Card";

const siteFooter = () => {
  return (
    <div className="footer">
      <Card bg="light">
        <Card.Body>
          <p className="d-none d-md-block">
            This website is designed to work with all modern browsers, but for the best, most secure browser experience,
            we recommend using{' '}
            <a href="https://www.mozilla.org/en-US/firefox/new/?redirect_source=getfirefox-com">
              Mozilla Firefox
            </a>
            .
          </p>
          <p className="privacy">
            <strong>
              Privacy Policy:{' '}
            </strong>
            Spam annoys us, too, so we will not give or sell your e-mail address(es) to anyone for anything.  Not even for cheesecake. Please send questions, complaints, suggestions, errors, bribes, praise, and cheesecake recipes to website@goldengateclassic.org.
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default siteFooter;
