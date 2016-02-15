<?php

// print_r($_POST['projectName']);
    if(!empty($_POST['projectName'])){
        $data['status' ] = 'OK';
        $data['text'] = 'Вы молорик';

    }else{
        $data['status' ] = 'error';
        $data['text'] = 'Заполните имя';

    }
   	
     echo json_encode($data);
