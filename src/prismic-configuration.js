import React from 'react';
import { RichText } from 'prismic-reactjs';
const Elements = RichText.Elements;

// -- function to create a unique key ID
function uuid(doc) {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};

// -- function to add unique key to props
function propsWithUniqueKey(props) {
  return Object.assign(props || {}, {key: uuid()});
}

const PrismicConfig = {

  apiEndpoint: 'https://serializer-example.prismic.io/api/v2',

  // -- Access token if the Master is not open
  // accessToken: 'xxxxxx',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  // -- Links resolution rules
  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver(doc) {
    if (doc.type == "page") return "/page/" + doc.uid;
    return '/';
  },
  
  // -- HTML Serializer
  // This function will be used to chnage the way the html is loaded
  htmlSerializer: function (element, content, children) {
    
    var props = {};
    
    switch(element.type) {
        
      // Add a class to paragraph elements
      case Elements.paragraph:
        props = {className: 'paragraph-class'};
        return React.createElement('p', propsWithUniqueKey(props), children);
      
      // Don't wrap images in a <p> tag
      case Elements.image: 
        props = { src: element.url , alt: element.alt || '' };
        return React.createElement('img', propsWithUniqueKey(props));
      
      // Add a class to hyperlinks
      case Elements.hyperlink:
        const targetAttr = element.data.target ? { target: element.data.target } : {};
        const relAttr = element.data.target ? { rel: 'noopener' } : {};
        props = Object.assign({
          className: 'link-class',
          href: element.data.url || PrismicConfig.linkResolver(element.data)
        }, targetAttr, relAttr);
        return React.createElement('a', propsWithUniqueKey(props), children);
      
      // Return null to stick with the default behavior
      default: 
        return null;
    }
  }
};

export default PrismicConfig;