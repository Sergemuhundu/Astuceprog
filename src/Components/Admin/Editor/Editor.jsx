import React, {useState} from 'react';
import { render } from 'react-dom';
import { Editor } from "@tinymce/tinymce-react";
import renderHTML from 'react-render-html';
import firebase from '../../../tools/Config';



const EditorScreen=()=>{
    const [content, setContent]=useState('This is the initial content of the editor');
    const [title, setTitle]=useState();

    const handleChange = (content, editor) => {
        setContent(content);
     }

     function handleTitle(e){
        setTitle(e);
     }

    const saveContent=(article)=>{
        article={
            titre:title,
            contenu:content
        }
        article.createdAt=firebase.firestore.FieldValue.serverTimestamp();
        firebase.firestore()
            .collection('Articles')
            .add(article)
            .then((snapshot)=>{
                article.id=snapshot.id;
            snapshot.set(article);
            })
            .then((articleData)=>{
            window.alert("article ajouté avec succès");
            console.log(articleData);
            })
            .catch((error)=>console.log(error));
    }
    return(
<main>
        <div className="main__container">

             <input type='text' placeholder='Title' name='title' onChange={(e)=>setTitle(e.target.value)} />
           
            <input id="my-file" type="file" name="my-file" style={{display:"none"}} onChange="" />
                <Editor
          initialValue="<p>This is the initial content of the editor</p>"
          apiKey="3j0y19hcpr1ygqxylcp5kqb7vmuadgrhsdfor5abxrtft83b"
          init={{
            height: 400,
            width:'100%',
            menubar: true,
            plugins: [
              'advlist autolink lists link image charmap print preview hr anchor pagebreak', 
              'searchreplace wordcount visualblocks visualchars code fullscreen codesample',
              'insertdatetime media nonbreaking save table contextmenu paste directionality',
              'emoticons template paste textcolor table colorpicker textpatern imagetools image'
            ],
            toolbar1:'insertfile undo redo| styleselect | alignleft aligncenter alignjustify | bullist numlist outdent indent| link image',
            toolbar2:'print preview media | forecolor backcolor emoticons| code codesample |table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
              file_browser_callback_types: 'image',
              file_picker_callback: function (callback, value, meta) {
                if (meta.filetype == 'image') {
                    var input = document.getElementById('my-file');
                    input.click();
                    input.onchange = function () {
                        var file = input.files[0];
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            console.log('name',e.target.result);
                            callback(e.target.result, {
                                alt: file.name
                            });
                        };
                        reader.readAsDataURL(file);
                    };
                }
            },
              paste_data_images: true,
          }}
          onEditorChange={handleChange}
        />
        <input type='submit' value="Poster l'article"  onClick={saveContent} />
        </div>
        </main>

    )
        }


export default EditorScreen;