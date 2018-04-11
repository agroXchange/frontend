import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import $ from 'jquery';
import 'foundation-sites/dist/css/foundation.min.css';

import { vegetables, fruits, beans } from '../productCodes'

import jquery from 'jquery';
window.$ = window.jQuery = jquery;
require('foundation-sites');

export default class Drilldown extends PureComponent {


    render() {
        return (

            <div>
                <ul className="vertical menu drilldown" data-drilldown>
                    <li>
                        <a href="#"> Vegetables   </a>
                        <ul className="menu vertical nested">
                            {vegetables.map(veg =>
                                <li key={Object.getOwnPropertyNames(veg)}>
                                    <button name={Object.values(veg)[0]}
                                        className="button"
                                        value={Object.getOwnPropertyNames(veg)}
                                        type="button"
                                        onClick={console.log("")}
                                    >
                                        {Object.getOwnPropertyNames(veg)}

                                    </button>
                                </li>
                            )}
                        </ul>
                    </li>
                    <li>
                        <a href="#"> Fruits & Nuts   </a>
                        <ul className="menu vertical nested">
                            {fruits.map(fruit =>
                                <li key={Object.getOwnPropertyNames(fruit)}>
                                    <button name={Object.values(fruit)[0]}
                                        className="button"
                                        value={Object.getOwnPropertyNames(fruit)}
                                        type="button"
                                        onClick={console.log("")}
                                    >
                                        {Object.getOwnPropertyNames(fruit)}

                                    </button>
                                </li>

                            )}
                        </ul>
                    </li>
                    <li>
                        <a href="#"> Beans & Crop   </a>
                        <ul className="menu vertical nested">
                            {beans.map(bean =>
                                <li key={Object.getOwnPropertyNames(bean)}>
                                    <button name={Object.values(bean)[0]}
                                        className="button"
                                        value={Object.getOwnPropertyNames(bean)}
                                        type="button"
                                        onClick={console.log("")}
                                    >
                                        {Object.getOwnPropertyNames(bean)}

                                    </button>
                                </li>

                            )}
                        </ul>
                    </li>
                </ul>
            </div>

        )
    }
}
