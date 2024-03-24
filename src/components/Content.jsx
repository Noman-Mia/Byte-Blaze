import { useLoaderData } from "react-router-dom";
// import placeholderImage from '../../assets/404.jpg'
import placeholderImages from '../assets/404.jpg'
const Content = () => {
    const blog = useLoaderData()
    const {cover_image, title, description, published_at,tags,body_html} = blog
    return (
        <div
          rel="noopener noreferrer"
          className="max-auto transition text-black mx-auto group hover:no-underline focus:no-underline bg-gray-300"
        >
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 bg-gray-500"
            src={cover_image || placeholderImages}
          />
          <div>
		<div className="flex flex-wrap py-6 gap-2">
            {
                tags.map(tag=> <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a> )
            }
			
		</div>
		
	</div>
          <div className="">
            <h3 className="text-2xl text-black font-semibold group-hover:underline group-focus:underline">
             {title}
            </h3>
            {/* {body_html} */}
          </div>
        </div>
    );
};

export default Content;