import React from 'react';

import classes from './BirthdayElement.module.css';
import Input from '../../../../UI/Input/Input';

class BirthdayElement extends React.Component {
    state = {
        subElements: {
            birthDay: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    size: 6,
                    placeholder: 'day'
                },
                value: '',
                validation: {
                    required: false
                }
            },
            birthMonth: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    size: 6,
                    placeholder: 'month'
                },
                value: '',
                validation: {
                    required: false
                }
            },
            birthYear: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    size: 12,
                    placeholder: 'year'
                },
                value: '',
                validation: {
                    required: false
                }
            }
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.subElements
        }

        const updatedElement = {
            ...updatedForm[inputIdentifier],
            value: event.target.value
        }

        updatedForm[inputIdentifier] = updatedElement;
        this.setState({subElements: updatedForm});
    }

    render() {
        const content = [];
        // eslint-disable-next-line
        for (const elementName in this.state.subElements) {
            const element = this.state.subElements[elementName];
            content.push(
                <React.Fragment key={elementName}>
                    <Input 
                        elementType={element.elementType}
                        elementConfig={element.elementConfig}
                        label={element.label}
                        value={element.value}
                        shouldValidate={false}
                        onChange={(event) => {this.inputChangedHandler(event, elementName)}}
                    >
                    </Input>
                    <div className={classes.Sep}></div>
                </React.Fragment>
            );
        }
        return (
            <div className={classes.Birthday}>
                {content}
            </div>
        );
    }
}

export default BirthdayElement;