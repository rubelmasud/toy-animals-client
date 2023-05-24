import React from 'react';
import useSetTitle from '../../Hooks/useSteTitle';

const Blog = () => {
    useSetTitle('Blog')
    return (
        <div className='pt-28'>
            <h3 className='text-3xl font-semibold text-center underline mb-6'>Simple Question & Answer</h3>
            <div className="md:flex">

                <div className="md:w-6/12 ">
                    <p className=' mb-6'> <small className=' font-semibold text-blue-600'>Note : </small><small>Clicking on the question will open the answer</small></p>

                    <div className="collapse rounded shadow-lg py-2 " data-aos="fade-down">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title peer-checked:bg-base-200 peer-checked">
                            What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </div>
                        <div className="collapse-content  peer-checked">
                            <p>An access token and a refresh token are both commonly used in authentication systems to secure and manage user sessions.</p><br />
                            <p>1. Access Token :</p>
                            <li>An access token is a credential that grants a client (such as a web or mobile application) access to certain protected resources or APIs on behalf of a user.</li>
                            <li>It is typically short-lived and has an expiration time, after which it becomes invalid and needs to be refreshed or reissued.</li>
                            <br />
                            <p>2. Refresh Token :</p>
                            <li>A refresh token is a long-lived credential used to obtain a new access token without requiring the user to re-authenticate.</li>
                            <li>Refresh tokens are used to address the short lifespan of access tokens and provide a way to maintain user sessions for extended periods.</li><br />
                            <p className='underline'>Storing Tokens on the Client-side:</p>
                            <li>Access tokens are usually stored in memory or local storage on the client-side</li>
                            <li>Local storage can be used as an alternative, but it carries a higher risk of being vulnerable to cross-site scripting (XSS) attacks. If using local storage, ensure you implement additional security measures, such as validating the origin of the requests.</li>
                        </div>
                    </div>
                    <div className="collapse rounded shadow-lg my-6 py-2" data-aos="fade-right">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title peer-checked:bg-base-200 peer-checked">
                            Compare SQL and NoSQL databases?
                        </div>
                        <div className="collapse-content  peer-checked">
                            <p>1 . Data Modal:</p>
                            <li>SQL: SQL databases follow a rigid, predefined schema and use structured data models. They have tables with fixed columns and relationships defined by foreign keys, enforcing data integrity.</li>
                            <li>NoSQL: NoSQL databases have a flexible schema or no schema at all, allowing for dynamic and unstructured data models. They use various data models like key-value, document, columnar, or graph, depending on the specific NoSQL database.</li><br />

                            <p>2. Scalability:</p>
                            <li>SQL: SQL databases are vertically scalable, which means they can handle increased load by upgrading hardware resources (e.g., CPU, RAM) of a single server. Scaling horizontally across multiple servers can be challenging.</li>
                            <li>NoSQL: NoSQL databases are designed for horizontal scalability. They can distribute data across multiple servers and handle high traffic and large datasets more efficiently.</li>
                            <br />
                            <p>3 . Query Language:</p>
                            <li>SQL: SQL databases use SQL as the standard query language for performing operations like querying, inserting, updating, and deleting data. SQL provides a declarative approach to data retrieval and manipulation.</li>
                            <li>NoSQL: NoSQL databases may not use SQL as the primary query language. Each NoSQL database has its own query language or API, which might be different from traditional SQL syntax.</li>

                        </div>
                    </div>
                    <div className="collapse rounded shadow-xl my-6 py-2" data-aos="fade-right">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title peer-checked:bg-base-200 peer-checked">
                            What is express js? What is Nest JS?
                        </div>
                        <div className="collapse-content  peer-checked">
                            <p>Express.js and Nest.js are both popular web application frameworks for Node.js, but they differ in their approach and features.</p>
                            <p>1. Express.js:</p>
                            <li>Express.js is a minimalistic and flexible web application framework for Node.js.</li>
                            <li>It provides a set of simple and intuitive APIs for building web applications and APIs.</li>
                            <li>Express.js focuses on being lightweight and unopinionated, giving developers the freedom to structure their applications as desired.</li>
                            <li>It offers routing, middleware support, and easy integration with various templating engines and databases.</li><br />

                            <p>2. Nest.js:</p>
                            <li>Nest.js is a progressive, TypeScript-based web application framework for Node.js.</li>
                            <li>Nest.js aims to provide a complete framework for building robust and scalable server-side applications.</li>
                            <li>Nest.js has built-in support for features like dependency injection, decorators, validation, ORM integrations, and GraphQL.</li>
                        </div>
                    </div>
                    <div className="collapse rounded shadow-xl my-6 py-2" data-aos="fade-up">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title peer-checked:bg-base-200 peer-checked">
                            What is MongoDB aggregate and how does it work ?
                        </div>
                        <div className="collapse-content  peer-checked">
                            <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                        </div>
                    </div>
                </div>
                <img className='animate-bounce h-full w-6/12 mx-auto' src="https://i.ibb.co/k6mW0Vs/3d-question-mark-symbol-and-a-person-sitting-on-top-of-it-M97-MFH-removebg-preview.png" alt="" border="0"></img>
            </div>
        </div>
    );
};

export default Blog;