import React from 'react';

const Post = (props) => {
	return (
		<div className="post">
			<div className="post__content">
				<strong>{props.number}. {props.post.title}</strong>
				<div>
					{props.post.description}
				</div>
				<button className="btn">delete post</button>
			</div>
		</div>
	);
}

export default Post;
