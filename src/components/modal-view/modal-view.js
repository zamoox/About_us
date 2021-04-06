import React from 'react';

const ModalView = () => {
  return (
    <div className="modal fade" id="myModal" >
        <div className="modal-dialog modal-sm">
            <div className="modal-content">
                <div className="modal-header">
                    <h1>Title</h1>
                </div>
                <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </div>
                <div className="modal-footer">
                    <button className="btn btn-warning" value="Close" data-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>   
  );
}

export default ModalView;
