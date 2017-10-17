import React from 'react';
import NotFoundPage from './NotFoundPage';
import PrismicReact from '../../prismic-react';
import { RichText } from 'prismic-reactjs';
import PrismicConfig from '../../prismic-configuration';

class HomePage extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      notFound: false,
      linkResolver : null,
    };
  }

  render() {
    if (this.props.PRISMIC_UNIVERSAL_DATA) {
      const document = this.props.PRISMIC_UNIVERSAL_DATA;
      
      return (
        <div data-wio-id={document.id}>
          <div className="container">
            {RichText.render(document.data['site-title'], PrismicConfig.linkResolver)}
            <img className="site-image" src={document.data.image.url}/>
            {RichText.render(document.data.text, PrismicConfig.linkResolver)}
          </div>
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFoundPage />;
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default PrismicReact.UniversalComponent({
  request: (ctx, props) => ctx.api.getSingle('homepage', {}),
  component: HomePage
});