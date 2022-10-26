<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;


class TestController extends AbstractController
{
     /**
     * @Route("/", name="home")
     */

    public function index()
    {
        $tests = ["test 1", "test 2"];
        $data = array(
            'tests' => $tests,
            'author' => 'nil',
            'team' =>["marc", "fordy", "nil"]
        );
        var_dump($data);
        return $this->render('index.html.twig', $data);
    }
}   
