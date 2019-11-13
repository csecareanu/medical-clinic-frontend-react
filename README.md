1. Airbnb React/JSX Style Guide: https://github.com/airbnb/javascript/tree/master/react
2. Google JavaScript Style Guide: https://google.github.io/styleguide/jsguide.html
---
3. How to Write Doc Comments for the Javadoc Tool: https://www.oracle.com/technetwork/java/javase/documentation/index-137868.html#styleguide
4. Getting Started with JSDoc 3: https://jsdoc.app/index.html
5. Higher-Order Components: https://reactjs.org/docs/higher-order-components.html
---
6. Enums in Javascript: https://stijndewitt.com/2014/01/26/enums-in-javascript/
---
7. CSS Naming Conventions: https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/
8. A comprehensive guide to using BEM with React: https://medium.com/trabe/a-comprehensive-guide-to-using-bem-with-react-14d00c199e0d
9. Multiple CSS classes in React: https://programmingwithmosh.com/react/multiple-css-classes-react/
---
10. Flexbox: https://internetingishard.com/html-and-css/flexbox/
11. Understanding Flexbox: Everything you need to know: https://www.freecodecamp.org/news/understanding-flexbox-everything-you-need-to-know-b4013d4dc9af/
---
12. How to Section Your HTML: https://css-tricks.com/how-to-section-your-html/
---
13. Optimal file structure for React applications: https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145
14. How to structure your files in a large React application — the solution: https://medium.com/@damusnet/how-to-structure-your-files-in-a-large-react-application-the-solution-99389c64985e
15. Structuring projects and naming components in React: https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76
16. React components naming convention: https://medium.com/@wittydeveloper/react-components-naming-convention-%EF%B8%8F-b50303551505
---

Display
Display components are only concerned with how things look. Generally, they should have the following characteristics:
Stateless — state is should be handled by a higher-level component and passed down through props
Callbacks should be passed down through props
Contain their own styles
“Pure” functions — given the same data (props), they’ll always return the same result
Container
The container component is concerned about providing the correct data and behaviors (callbacks) to the display component. 

Containers know about data, it’s shape and where it comes from. They know details about how the things work or the so called business logic
In order to use the presentational and creation pattern: 
View component: only display a rendering of data (no API calls or internal actions)
Button component: only display a actionable view
Connect component: legacy connect components
forms components: Input , Upload , etc …

```js

// Adauga  proprietati la o componenta

/**
 * By default NavItemButton does not any CSS attached. 
 * Adding CSS from the imported @param classesMenu.
 */
const NavItemButtonCSS = withProps(NavItemButton, 
    {
        styleItem: classesMenu.MenuItem, 
        styleText: classesMenu.MenuText, 
        styleTextActive: classesMenu.Active
    });

/* Adds the specified 'newProps' properties to 'WrappedComponent'  instance */
const withProps = (WrappedComponent, newProps) => {
    return props => (
        <WrappedComponent {...props} {...newProps} />
    );
};

export default withProps;
```

```js
// Iti pune la dispozitie contextul si returneaza o functie pe post de componenta
            <UIStateContext.Consumer>
                { 
                    context => (
                        context.userAuthStatus != UserAuthStatus.UNAUTHENTICATED ?
                        {userLogin} : {userLogout} 
                    )
                }
            </UIStateContext.Consumer>
```