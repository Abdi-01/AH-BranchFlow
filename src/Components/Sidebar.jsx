import React from 'react';

const SidebarComponent = (props) => {

    return (<div
        className='col-md-4 order-md-2 ms-2'
    >
        <div
            className='text-start mb-1 pb-5'
        >
            <div
                className='bg-light'
            >
                {/* about */}
                <h4><i>About</i></h4>
                <p>Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
            </div>
        </div>
        <div
            className='text-start mb-1 pb-5'
        >
            <div
                className='bg-light'
            >
                {/* archives */}
                <h4><i>Archive</i></h4>
                <ul class="list-group border-0">
                    <a href="#">March 2021</a>
                    <a href="#">February 2021</a>
                    <a href="#">January 2021</a>
                    <a href="#">December 2020</a>
                    <a href="#">November 2020</a>
                    <a href="#">October 2020</a>
                    <a href="#">September 2020</a>
                    <a href="#">August 2020</a>
                    <a href="#">July 2020</a>
                    <a href="#">June 2020</a>
                    <a href="#">May 2020</a>
                    <a href="#">April 2020</a>
                </ul>
            </div>
        </div>
        <div
            className='text-start mb-1 pb-5'
        >
            <div
                className='bg-light'
            >
                {/* elsewhere */}
                <h4><i>Elsewhere</i></h4>
                <ul class="list-group border-0">
                    <a href="#">Github</a>
                    <a href="#">Twitter</a>
                    <a href="#">Facebook</a>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default SidebarComponent;