"use client";
import Image from "next/image";

const Table = () => {
  return (
    <div className="overflow-x-auto border border-gray-300 mx-10 my-5 rounded-xl shadow-md">
      <table className="min-w-full border text-center">
        <thead className="bg-gray-200 border-b border-gray-300 shadow-md">
          <tr>
            <th className="p-2">Image</th>
            <th className="p-2 ">Category Id</th>
            <th className="p-2 ">Sub Category Id</th>
            <th className="p-2 ">Description</th>
            <th className="p-2 ">Operations</th>
          </tr>
        </thead>
        <div className="m-5"></div>
        <tbody className="text-sm">
          {[1, 2, 3, 4].map((item) => (
            <tr key={item} className="text-center">
              <td className="p-2">
                <div className="flex justify-center">
                  <Image
                    src="/man.png"
                    height={40}
                    width={40}
                    alt="Profile"
                    className="rounded-full"
                  />
                </div>
              </td>
              <td className="p-2">6716491e...</td>
              <td className="p-2">6717762a...</td>
              <td className="p-2">Lorem ipsum dolor sit.</td>
              <td className="p-2">
                <div className="flex justify-center gap-2">
                  <button className="px-2 py-1 bg-green-200 rounded">
                    Edit
                  </button>
                  <button className="px-2 py-1 bg-red-200 rounded">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// const Table = () => {
//   interface Article {
//     _id: string;
//     image?: string;
//     title: string;
//     description: string;
//   }

//   const [articles, setArticles] = useState<Article[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         // Fetch data from multiple endpoints
//         const articleRes = await fetch(
//           "http://localhost:2026/api/v1/admin/Article/getArticle"
//         );
//         const articleJson = await articleRes.json();

//         const otherRes = await fetch(
//           "http://localhost:2034/api/v1/admin/AutoDealerShip/allAutoDealerShip"
//         );
//         const otherJson = await otherRes.json();

//         // Combine data if needed
//         const combinedData = [
//           ...(articleJson.data || []),
//           ...(otherJson.data || []),
//         ];

//         setArticles(combinedData);
//       } catch (err) {
//         console.error("Failed to fetch data", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="overflow-x-auto border border-gray-300 mx-10 my-5 rounded-xl shadow-md">
//       <table className="min-w-full border text-center">
//         <thead className="bg-gray-200 border-b border-gray-300 shadow-md">
//           <tr>
//             <th className="p-2">Image</th>
//             <th className="p-2">Title</th>
//             <th className="p-2">Description</th>
//             <th className="p-2">Operations</th>
//           </tr>
//         </thead>
//         <tbody className="text-sm">
//           {articles.map((article) => (
//             <tr key={article._id} className="text-center">
//               <td className="p-2">
//                 <div className="flex justify-center">
//                   <Image
//                     src={article.image || "/placeholder.png"}
//                     height={40}
//                     width={40}
//                     alt="Profile"
//                     className="rounded-full"
//                   />
//                 </div>
//               </td>
//               <td className="p-2">{article.title}</td>
//               <td className="p-2">{article.description}</td>
//               <td className="p-2">
//                 <div className="flex justify-center gap-2">
//                   <button className="px-2 py-1 bg-green-200 rounded">
//                     Edit
//                   </button>
//                   <button className="px-2 py-1 bg-red-200 rounded">
//                     Delete
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;
