import React from 'react';
import NotFoundPage from './NotFoundPage';
import PrismicReact from '../../prismic-react';
import { RichText } from 'prismic-reactjs';
import PrismicConfig from '../../prismic-configuration';

class Page extends React.Component {
  
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
      
      return(
        <div className="container" data-wio-id={document.id}>
          {RichText.render(document.data.title, PrismicConfig.linkResolver)}
          {RichText.render(document.data.text, PrismicConfig.linkResolver, PrismicConfig.htmlSerializer)}
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFoundPage />;
    } else {
      return(
        <div className="container">
          <div>Loading</div>
        </div>
      );
    }
  }
}

export default PrismicReact.UniversalComponent({
  request: (ctx, props) => ctx.api.getByUID('page', props.match.params.uid, {}),
  component: Page
});