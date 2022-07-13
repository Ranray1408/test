import React, { useState } from 'react';
import Post from './Posts';
import Button from './UI/button/Button';
import Input from './UI/input/Input';

const PostsList = (props) => {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'javascript', description: 'javascript is programing language' },
		{ id: 2, title: 'java', description: 'java is programing language' },
		{ id: 3, title: 'c++', description: 'c++ is programing language' }
	]);

	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');

	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			id: Date.now(),
			title: title,
			desc: desc
		}

		setPosts([...posts, newPost]);
		console.log(newPost);
		setTitle('');
		setDesc('');
	}

	return (
		<div className="posts-list">
			<form>
				<Input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='title' />
				<Input value={desc} onChange={e => setDesc(e.target.value)} type="text" placeholder='description' />
				<Button onClick={addNewPost} >Create post</Button>
			</form>
			<h1 style={{ textAlign: 'center' }}>{props.listTitle}</h1>
			{posts.map((post, index) =>
				<Post number={index + 1} post={post} key={post.id} />
			)}
		</div>
	);
}

export default PostsList;
//
