import React, {Component} from 'react';

class OutSideClicker extends Component {

    children_ref = [];

    setWrapperRef = (node) => {
        this.wrapperRef = node;
      }
    
    componentDidMount() {
        document.addEventListener('click', this.outsideClickHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.outsideClickHandler);
    }

    outsideClickHandler = (event) => {
        if(this.wrapperRef && !this.wrapperRef.contains(event.target)){
            console.log(this.wrapperRef);
            console.log(event.target);
            this.children_ref.forEach(child_ref => child_ref.current.handleClickOutside());
        }
    }

    render () {

        if(this.children_ref.length===0){
            for(var i=0; i<React.Children.count(this.props.children);i++){
                this.children_ref.push(React.createRef());
            }
        }
        
        const children = React.Children.map(this.props.children,
            (child, index) => React.cloneElement(child, {
              ref : this.children_ref[index]
            })
           );

        return (
            <div className='sdf' style={{width: '100%' , height: '100%'}} ref={this.setWrapperRef}>{children}</div>
        );
    }
}

export default OutSideClicker
