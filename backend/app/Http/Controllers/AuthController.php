<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //

    public function login(Request $request)
    {
        try {

            if (Auth::attempt($request->only('email', 'password'))) {
                $user = Auth::user();

                $token = $user->createToken('app')->accessToken;
                return response([
                    'message' => 'Successfully logged in',
                    'token' => $token,
                    'user' => $user
                ], 200);
            }
        } catch (\Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }
        return response([
            'message' => 'Invalid email/password'
        ], 401);
    }

    public function register(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|min:3',
                'email' => 'required|email|unique:users',
                'password' => 'required|min:6'
            ]);

            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password  = bcrypt($request->password);
            $user->save();

            //login
            Auth::attempt($request->only('email', 'password'));

            $token = $user->createToken('app')->accessToken;



            return response([
                'message' => 'Successfully registered',
                'token' => $token,
                'user' => $user
            ], 200);
        } catch (\Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }

        return response([
            'message' => 'Error occurred during registration'
        ], 401);
    }

    public function user(Request $request)
    {
        $user = Auth::user();
        if ($user) {
            return response([
                'user' => $user
            ], 200);
        }
        return response([
            'message' => 'You are not logged in'
        ], 404);
    }

    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();
        return response([
            'message' => 'Successfully logged out'
        ], 200);
    }
}
