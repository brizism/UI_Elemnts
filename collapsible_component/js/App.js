import React from 'react';
import image from '../images/expand-vertical-4.svg';
import Collapsible from './Collapsible';

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>Collapsible Content</h1>
                </header>
                <div className="content">
                    <div className="panel-group">
                        <Collapsible title="Overview">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel optio perspiciatis necessitatibus facilis ullam fuga beatae voluptate eligendi. Quaerat, nihil facilis? Repellendus architecto, voluptatem explicabo, iste eos rerum delectus quae tempore perspiciatis ipsam iure doloremque ex tempora voluptates repudiandae, odio et. Natus dolores aliquid ipsa dolor eaque hic laudantium nisi laboriosam nam quam perferendis iste quisquam quaerat nihil expedita delectus voluptates, consequatur consectetur excepturi incidunt, iusto error ducimus! Repellendus magni natus impedit voluptates dolore facere quia quam suscipit doloremque, magnam aut debitis accusantium asperiores saepe odio voluptate architecto? Ut necessitatibus a ullam illo alias. Officiis optio maxime rerum labore dolorem aut similique non eius, quo praesentium perferendis eum iste veniam aperiam fuga reiciendis cupiditate, distinctio consectetur impedit excepturi. Corrupti voluptas at voluptatibus illo aspernatur earum rem consequuntur temporibus numquam ex, fuga excepturi. Quasi consequuntur autem dolores reiciendis tempora. Voluptatem adipisci tempora qui laboriosam vel consectetur dolores quas enim libero magni?</p>
                        </Collapsible>
                        <Collapsible title="Features">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, accusamus.</p>
                        </Collapsible>
                        <Collapsible title="Software">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </Collapsible>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
